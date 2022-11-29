import React from 'react';
import { AiOutlineClockCircle, AiOutlineSearch, AiTwotoneFilter } from 'react-icons/ai';
import { IoNotificationsSharp, IoExpandSharp } from 'react-icons/io5';
import {
  HeaderContainer,
  HeaderText,
  HeaderHour,
  HeaderRow,
  HeaderSearch,
  HeaderGroupSearch,
  HeaderSearchButton,
  HeaderFilterButton
} from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderRow style={{'width':'20%'}}>
        <HeaderText>Tarefas</HeaderText>
        <HeaderHour><AiOutlineClockCircle />5h <span>10</span></HeaderHour>
      </HeaderRow>

      <HeaderRow style={{'width':'50%'}}>
        <HeaderGroupSearch>
          <HeaderSearch type="text" placeholder="Pesquisar por Tarefa..." />
          <HeaderSearchButton><AiOutlineSearch /></HeaderSearchButton>
        </HeaderGroupSearch>

        <HeaderFilterButton>Filtro <AiTwotoneFilter /></HeaderFilterButton>
        <IoNotificationsSharp />
        <IoExpandSharp />
      </HeaderRow>
    </HeaderContainer>
  )
}

export default Header;
