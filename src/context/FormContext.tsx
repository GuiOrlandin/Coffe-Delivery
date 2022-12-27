import { createContext, ReactNode, useEffect, useState } from "react";

interface FormContextProviderProps {
  children: ReactNode;
}

interface formData {
  address: string;
  city: string;
  uf: string;
  district: string;
  complement: string;
  cep: string;
  number: number | null;
  paymentMethod: string;
}

interface FormContentType {
  createFormValues: (data: formData) => void;
  formValues: formData | undefined;
  updatePaymentMethod: (payment: string) => void;
}

const FORM_VALUES_STORAGE_KEY = "@coffe-delivery:forma-values-1.0.0";

export const FormContext = createContext({} as FormContentType);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [formValues, setFormValues] = useState<formData>(() => {
    const storedFormValues = localStorage.getItem(FORM_VALUES_STORAGE_KEY);

    if (storedFormValues) {
      return JSON.parse(storedFormValues);
    }

    return {};
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(formValues);

    localStorage.setItem(FORM_VALUES_STORAGE_KEY, stateJSON);
  }, [formValues]);

  function createFormValues(data: formData) {
    console.log("entrou");
    const values: formData = {
      address: data.address,
      city: data.city,
      uf: data.uf,
      complement: data.complement,
      district: data.district,
      cep: data.cep,
      number: data.number,
      paymentMethod: data.paymentMethod,
    };
    setFormValues(values);
    console.log({ formValues });
  }

  function updatePaymentMethod(payment: string) {
    createFormValues({
      ...formValues,
      paymentMethod: payment,
    });
  }

  return (
    <FormContext.Provider
      value={{ createFormValues, formValues, updatePaymentMethod }}
    >
      {children}
    </FormContext.Provider>
  );
}
