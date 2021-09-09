import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import{FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa';
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle,
    FooterLink, SocialMedia, SocialMediaWrap, SocialMediaLogo, WebsiteCR, SocialIcons, SocialIconLink
} from './FooterElements'


const Footer = () => {

    
    const toggleHome = () =>  {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Others </FooterLinkTitle>
                                <FooterLink to='/signIn'>How it works</FooterLink>
                                <FooterLink to='/signIn'>Testimonials</FooterLink>
                                <FooterLink to='/signIn'>Newsletter</FooterLink>
                                <FooterLink to='/signIn'>Biography</FooterLink>
                                <FooterLink to='/signIn'>Reference</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                                <FooterLink to='/signIn'>Take a Commit</FooterLink>
                                <FooterLink to='/signIn'>Side Project</FooterLink>
                                <FooterLink to='/signIn'>Part-time</FooterLink>
                                <FooterLink to='/signIn'>Contract</FooterLink>
                                <FooterLink to='/signIn'>Support</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to='/signIn'>Instagram</FooterLink>
                                <FooterLink to='/signIn'>Facebook</FooterLink>
                                <FooterLink to='/signIn'>LinkedIn</FooterLink>
                                <FooterLink to='/signIn'>Twitter</FooterLink>
                                <FooterLink to='/signIn'>Github</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Hobbies </FooterLinkTitle>
                                <FooterLink to='/signIn'>Programming</FooterLink>
                                <FooterLink to='/signIn'>Photography</FooterLink>
                                <FooterLink to='/signIn'>Designing</FooterLink>
                                <FooterLink to='/signIn'>Travelling</FooterLink>
                                <FooterLink to='/signIn'>Sportxs</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialMediaLogo to='/' onClick={toggleHome}>
                            JKhalid.
                        </SocialMediaLogo>
                        <WebsiteCR>
                            JKhalid © {new Date().getFullYear()} All rights reserved.
                        </WebsiteCR>
                        <SocialIcons>
                            <SocialIconLink href='//www.instagram.com/danealkh' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//www.facebook.com/jaydane' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.linkedin.com/in/jaydane-khalid-a069791b2' target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='//www.twitter.com/danealkh' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//www.github.com/Jaykhalid' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
