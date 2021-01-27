import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background: #453f3f;
  display: flex;
`;

export const FooterItems = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const FooterLinkWrapper = styled.div`
  padding: 0 100px;
  display: flex;
  justify-self: flex-start;
  text-align: center;
  align-items: center;
`;

export const FooterLogo = styled.img`
  width: 100px;
`;

export const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-bottom: 0;
`;

export const FooterLink = styled.li`
  margin: 0 20px;
  list-style-type: none;
  color: var(--color-white);
`;

export const SocialMedia = styled.div`
  padding: 0 100px;
  display: flex;
  justify-self: flex-end;
  text-align: center;
  align-items: center;
`;

export const SocialMediaMenu = styled.p`
  margin: 0 10px;
  color: var(--color-white);
  margin-right: 20px;
`;

export const SocialMediaIcon = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 20px;
`;
