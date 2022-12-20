import { createContext, ReactNode, useState } from "react";

interface FormContextProviderProps {
  children: ReactNode;
}

interface formData {
  adress: string;
  city: string;
  uf: string;
  district: string;
  complement: string;
  cep: number;
  number: number;
}

interface FormContentType {
  createFormValues: (data: formData) => void;
  formValues: formData | undefined;
}

export const FormContext = createContext({} as FormContentType);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [formValues, setFormValues] = useState<formData>();

  function createFormValues(data: formData) {
    console.log("entrou");
    const values: formData = {
      adress: data.adress,
      city: data.city,
      uf: data.uf,
      complement: data.complement,
      district: data.district,
      cep: data.cep,
      number: data.number,
    };
    setFormValues(values);
    console.log({ formValues });
  }
  return (
    <FormContext.Provider value={{ createFormValues, formValues }}>
      {children}
    </FormContext.Provider>
  );
}
