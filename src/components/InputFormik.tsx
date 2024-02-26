import { cn } from '@/utils/style';
import { ErrorMessage, Field } from 'formik';

interface InputFormikProps {
  label?: string;
  name: string;
  type?: string;
  touched: { [key: string]: boolean };
  errors: { [key: string]: string };
}

const InputFormik: React.FC<InputFormikProps> = ({
  label,
  name,
  type,
  touched,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="pt-5 text-base font-bold text-black">
          {label}
        </label>
      )}
      <Field
        name={name}
        type={type || 'text'}
        className={cn(
          'block w-full rounded-lg border border-[#EAEAEA] bg-white px-5 py-3 text-sm text-gray-900 focus:border-black focus:ring-black indent-[20px]'
        )}
      />
      {touched[name] && errors[name] ? (
        <p className="font-semibold text-red-500">
          <ErrorMessage name={name} />
        </p>
      ) : null}
    </div>
  );
};

export default InputFormik;
