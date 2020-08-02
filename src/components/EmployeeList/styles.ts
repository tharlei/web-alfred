import styled, { css } from 'styled-components';

interface Modal {
  active: boolean;
}

interface Responsive {
  responsive: boolean;
}

export const ActionWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ActionCard = styled.div`
  display: flex;
  padding: 36px 0 36px 0;
`;

export const ActionCardContent = styled.div`
  background: #fff;
  border-radius: 4px;
  border: thin solid rgba(0,0,0,.12);

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
  }
`;

export const ActionCardLogo = styled.div`
  margin: 10px;
  height: 40px;
  min-width: 40px;
  width: 40px;
  margin-right: 16px;
  background-color: var(--red-dark);
  border-color: var(--red-dark);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #FFF;
    font-size: 16px;
  }
`;

export const ActionCardText = styled.div`
  display: flex;  
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1;
  overflow: hidden;
  padding: 12px 0;

  span {
    color: rgba(0,0,0,.87);
  }

  svg {
    color: rgba(0,0,0,.54);
    margin: 0 30px 0 30px;
  }
`;

export const Input = styled.input`
  margin: 10px 0 25px;
  padding: .375rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  :focus {
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`;

export const TableCard = styled.div`
  border: 0;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 4px;
  color: #333;
  background: #fff;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
`;

export const TableCardContent = styled.div`
  padding: .9375rem 20px;
  position: relative;
`;


export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  tbody tr {
    position: relative;
  }

  tr {
    border-bottom: thin solid rgba(0,0,0,.12);
  }
`;

export const TableTh = styled.td<Responsive>`
  color: rgba(0,0,0,.6);
  user-select: none;
  font-size: .75rem;
  font-weight: bold;
  padding: 0 16px;
  height: 24px;
  text-align: left;

  ${props =>
    props.responsive && css`
        @media (max-width: 960px) {
          display: none;
        }
      `
  }
`;

export const TableTd = styled.th<Responsive>`
  padding: 12px 8px;
  vertical-align: middle;
  border-color: #ddd;
  text-align: left;

  ${props =>
    props.responsive && css`
      @media (max-width: 960px) {
        display: none;
      }
		`
  }

`;

export const ButtonEdit = styled.span`
  cursor: pointer;
  color: #4caf50;
`;

export const ButtonDelete = styled.span`
  cursor: pointer;
  color: #f44336;
  margin-left: 20px;
`;

export const Modal = styled.div<Modal>`
  display: ${props => props.active ? 'block' : 'none'};
  position: fixed; 
  z-index: 100; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0); 
	background-color: rgba(0,0,0,0.4);
	
	@media(min-width: 1024px) {
  	padding-top: 100px;
	}
`;

export const ModalContent = styled.div`
  border-radius: 6px;
	background-color: #fff;
  z-index: 200; 
	margin: auto;
	width: 30%;
	margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

	svg {
    font-size: 80px;
    color: var(--red-lighter);
    margin: 30px 0 30px;
	}

	h1 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 30px;
	}

  button, span {
    cursor: pointer;
    border: 0;
    border-radius: .25em;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    background: var(--red);
    margin-bottom: 30px;
  }

  span {
    margin-left: 20px;
    background: #aaa;
  }
`;