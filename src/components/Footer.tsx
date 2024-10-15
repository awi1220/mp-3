import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: #FED8B1;
    color: #033E3E;
    text-align: center;
    padding: 10px 0;
    clear: both;
    //Media query for screens smaller than 750px
    @media (max-width: 750px) {
      text-align: center;
      padding: 10px 0;
      width: 100%;
      position: relative;
  }
`;

export default function Footer() {
    return (
        <FooterWrapper>All Rights Reserved by Ah Hyun (Amy) Wi <a href="/references">Credits</a> &copy;</FooterWrapper>
    );
}
