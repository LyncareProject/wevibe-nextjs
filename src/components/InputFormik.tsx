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
        <label htmlFor={name} className=" text-base font-bold text-black pt-5">
          {label}
        </label>
      )}
      <Field
        name={name}
        type={type || 'text'}
        className={cn(
          'block w-full rounded-lg border border-black bg-gray-50 px-5 py-2 text-sm text-gray-900 focus:border-black focus:ring-black'
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
