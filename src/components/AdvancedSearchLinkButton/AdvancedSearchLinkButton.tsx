import { Button } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { sitemap } from '../../sitemap';

export const AdvancedSearchLinkButton: FC = () => (
  <Link to={sitemap.advancedSearch.urls[0]}>
    <Button
      sx={(theme) => ({
        marginTop: theme.spacing(1),
      })}
      variant="contained"
    >
      Advanced Search
    </Button>
  </Link>
);
