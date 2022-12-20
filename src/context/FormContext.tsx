import { createContext, ReactNode } from "react";

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
}

export const FormContext = createContext({} as FormContentType);

export function FormContextProvider({ children }: FormContextProviderProps) {
  function createFormValues(data: formData) {
    console.log("entrou");
    const formValues: formData = {
      adress: data.adress,
      city: data.city,
      uf: data.uf,
      complement: data.complement,
      district: data.district,
      cep: data.cep,
      number: data.number,
    };

    console.log({ formValues });
  }
  return (
    <FormContext.Provider value={{ createFormValues }}>
      {children}
    </FormContext.Provider>
  );
}
