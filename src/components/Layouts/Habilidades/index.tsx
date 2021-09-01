import React from 'react';
import { CardLinguagens } from '../../Cards/CardLinguagens';
import { PageContainer } from '../../Containers/PageContainer';
import { Title } from '../../Utilitarios/Title';

import { Container, Content } from './styles';

export const Habilidades: React.FC = () => {
  return (
    <div id="habilidades">
      <PageContainer>
        <Title label="Habilidades" />

        <Container>
          <Content>
            <CardLinguagens />
          </Content>
          <aside>aside</aside>
        </Container>
      </PageContainer>
    </div>
  );
};
