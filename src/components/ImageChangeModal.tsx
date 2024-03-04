import { supabaseClient } from '@/utils/supabase';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';

const supabase = supabaseClient;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

type ImageChangeModalProps = {
  userId: string;
  isOpen: boolean;
  onRequestClose: () => void;
};

const ImageChangeModal = ({
  userId,
  isOpen,
  onRequestClose,
}: ImageChangeModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { data: session, update: sessionUpdate } = useSession();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setSelectedFile(event.target.files[0]);
      setPreviewUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleUploadClick = async () => {
    if (selectedFile) {
      const randomFileName =
        uuidv4() + '.' + selectedFile.name.split('.').pop();
      const filePath = `${supabaseUrl}/storage/v1/object/public/profile-images/${userId}/${randomFileName}`;
      const storageFilePath = `${userId}/${randomFileName}`;
      const { data, error } = await supabase.storage
        .from('profile-images')
        .upload(storageFilePath, selectedFile);
      sessionUpdate({ info: filePath });
      onRequestClose();

      if (error) {
        console.error('Image upload error', error);
      } else {
        console.log('Image uploaded successfully');
        // MySQL에 이미지 경로 저장
        await axios.post(`/api/auth/change-image/${userId}`, {
          userId,
          image: filePath,
        });
      }
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Change Modal"
      ariaHideApp={false}
      className={
        'flex justify-center items-center my-20 mx-auto flex-col w-6/12 border border-slate-300 rounded-xl bg-white z-50'
      }
    >
      <div className=" flex justify-center items-center my-10 mx-auto w-10/12">
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" />
        ) : session?.user.provider === 'credentials' ? (
          <img
            src={`${supabaseUrl}/storage/v1/object/public/profile-images/${session.user.image}`}
            alt="userImage"
          />
        ) : (
          <img src={session?.user.image} alt="userImage" />
        )}
      </div>
      <div className="flex justify-between py-4 gap-[450px]">
        <div className=" relative w-[80px] h-[36px] overflow-hidden">
          <img src="/Icon/Icon-open.jpg" className=" p-0 pl-1" alt="open" />
          <input
            type="file"
            className=" opacity-0 cursor-pointer top-0 right-0 absolute text-[29px]"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex gap-3">
          <button onClick={handleUploadClick}>저장</button>
          <button onClick={() => onRequestClose()}>닫기</button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageChangeModal;