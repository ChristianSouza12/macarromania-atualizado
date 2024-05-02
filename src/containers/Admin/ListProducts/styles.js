import styled from "styled-components";
import MuiEditIcon from "@mui/icons-material/Edit";

export const Container = styled.div`
  padding-top: 20px;
`;

export const Image = styled.img`
  width: 100px;
  border-radius: 5px;
 
`;

export const EditIconStyled = styled(MuiEditIcon)`
  cursor: pointer;
  color:#323d5d;

  &:hover{
    opacity: .7;
  }
  &:active{
    opacity: .5;
  }
`;
