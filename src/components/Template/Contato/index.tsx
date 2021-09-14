import { ChangeEvent, useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FiGithub, FiMail } from 'react-icons/fi';
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

import emailjs from 'emailjs-com';

import { Input } from '../../Forms/Input';
import { Button } from '../../Forms/Button';
import { TextArea } from '../../Forms/TextArea';
import { PageContainer } from '../../Layout/PageContainer';
import { CardRedesSociais } from '../../Cards/CardRedesSociais';

import { Container, Linhas, RedesSociais } from './styles';

export const Contato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  emailjs.init(process.env.USER_ID_EMAILJS);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (nome === '' || email === '' || message === '') {
        toast.warn('Por Favor, preencha todos os campos.', {
          theme: 'dark',
        });
        return;
      }

      const parsedData = {
        from_name: nome,
        email: email,
        message: message,
      };

      emailjs
        .send(
          process.env.EMAIL_SERVICE,
          process.env.TEMPLATE_EMAIL,
          parsedData,
          process.env.USER_ID_EMAILJS,
        )
        .then(() => {
          toast.success('Enviado!', {
            position: 'top-right',
            theme: 'dark',
          });
        });

      setNome('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar!', {
        position: 'top-right',
        theme: 'dark',
      });
    }
  };

  return (
    <PageContainer id="contato" title="Contato">
      <Container>
        <main>
          <form onSubmit={handleSubmit}>
            <h2>Entre em Contato!</h2>

            <Input
              label="Nome"
              name="nome"
              onChange={e => setNome(e.target.value)}
              value={nome}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <TextArea
              label="Mensagem"
              name="mensagem"
              onChange={e => setMessage(e.target.value)}
              value={message}
            />

            <Button label="Enviar" type="submit" />
          </form>
          <RedesSociais>
            <h2>Minhas Redes Sociais!</h2>
            <section>
              <CardRedesSociais
                card={[
                  {
                    icon: FiGithub,
                    title: 'Github',
                    url: 'https://github.com/Glerme',
                  },
                  {
                    icon: FaLinkedinIn,
                    title: 'Linkedin',
                    url: 'https://www.linkedin.com/in/glerme/',
                  },
                  {
                    icon: FaWhatsapp,
                    title: 'WhatsApp',
                    url: 'https://api.whatsapp.com/send?phone=5514998363749',
                  },
                  {
                    icon: FaFacebook,
                    title: 'Facebook',
                    url: 'https://www.facebook.com/guilherme.felipe.965/',
                  },
                  {
                    icon: FaInstagram,
                    title: 'Instagram',
                    url: 'https://www.instagram.com/gui_felipeh/',
                  },
                  {
                    icon: FiMail,
                    title: 'Email',
                    url: "mailto:guiggff@gmail.com?subject='Contato'",
                  },
                ]}
              />
            </section>
          </RedesSociais>
        </main>
        <Linhas />
      </Container>
    </PageContainer>
  );
};
