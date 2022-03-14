import React from 'react';
import { Grid, Image, Label, Icon } from 'semantic-ui-react';
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants';
import './styles.css';

const PokemonCard = ({pokemon}) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <Image centered src={pokemon.sprites.front_default} />
        <Icon name='favorite' color={FAV_COLOR} />
        <p className='Pokemon-title'>{pokemon.name}</p>
        {pokemon.types.map((type) => (<Label color={MAIN_COLOR} key={`${pokemon.id}-${type.type.name}`}>{type.type.name}</Label>))}
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
