import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 10rem 27.25rem 10rem;

  img {
  }
  h1 {
    font-size: 2rem;
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme.colors["--yellow-dark"]};
  }

  h2 {
    font-size: 1.25rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.3;

    margin-bottom: 2.5rem;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 6.25rem;
`;
export const AdressInformation = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px;
  gap: 2rem;
  padding: 2.5rem 8.25rem 2.5rem 2.5rem;

  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.3;
  background: ${(props) => props.theme.colors["--background"]};
`;

export const LinearGradientBorder = styled.div`
  padding: 1px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-radius: 6px 36px;
`;

export const ForecastDelivery = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StrongParagraph = styled.p`
  font-weight: 700;
`;

export const SvgStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme.colors["--white"]};
  }
`;

export const AdressContainer = styled(SvgStyle)`
  svg {
    background: ${(props) => props.theme.colors["--purple"]};
    color: ${(props) => props.theme.colors["--white"]};
  }
`;

export const DeliveryInfoContainer = styled(SvgStyle)`
  svg {
    background: ${(props) => props.theme.colors["--yellow"]};
  }
`;

export const PaymentInfoContainer = styled(SvgStyle)`
  svg {
    background: ${(props) => props.theme.colors["--yellow-dark"]};
  }
`;
