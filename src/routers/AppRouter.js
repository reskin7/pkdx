import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PokemonItem } from '../components/PokemonItem';
import { SearchScreen } from '../components/search/SearchScreen';

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/pokemon/:pokeId" component={PokemonItem} />
        <Route exact path="/search" component={SearchScreen} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};
