import React, { createRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import { Button, Skeleton, Typography } from '@mui/material';
import useQuery from '../../../util/useQuery';

const Roogle = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const searchQuery = query.get('q');
  const daring = query.get('daring');

  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = createRef();

  useEffect(() => {
    console.log(daring);
    console.log(searchQuery);
  }, [searchQuery, daring]);

  if (searchQuery) {
    return (
      <Typography
        className="roogle-title"
        variant="h1"
        component="h1"
      >
        {isLoading ? <Skeleton /> : 'Search Results'}
      </Typography>
    );
  }

  return (
    <div className="roogle">
      <Typography
        className="roogle-title"
        variant="h1"
        component="h1"
      >
        Roogle
      </Typography>
      <div className="search-container">
        <div
          className="roogle-input-container"
          style={{
            ...(isFocused && {
              backgroundColor: '#383838',
              border: '1px solid transparent',
            }),
          }}
          aria-controls="roogle-input"
          aria-expanded={false}
          role="combobox"
          tabIndex={0}
          onClick={() => {
            inputRef.current.focus();
            setIsFocused(true);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              inputRef.current.focus();
              setIsFocused(true);
            }
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        >
          <Search className="roogle-search-icon" />
          <input
            ref={inputRef}
            id="roogle-input"
            className="roogle-input"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <Button
          className="search-button"
          onClick={() => {
            if (input !== '') {
              navigate(`?tab=Roogle&q=${input.replace(' ', '+')}`);
              setIsLoading(true);
            }
          }}
        >
          Roogle Search
        </Button>
        <Button
          style={{ marginLeft: '10px' }}
          className="search-button"
          onClick={() => {
            if (input !== '') {
              navigate('?tab=Roogle&daring=true');
              setIsLoading(true);
            }
          }}
        >
          I&apos;m Feeling Daring
        </Button>
      </div>
    </div>
  );
};

export default Roogle;
