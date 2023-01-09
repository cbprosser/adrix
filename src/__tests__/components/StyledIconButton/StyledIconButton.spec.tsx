import { render } from '@testing-library/react';
import { StyledIconButton } from '../../../components';
import SpeedIcon from '@mui/icons-material/Speed';
import { ButtonProps } from '@mui/material';

const renderButton = (variant?: Exclude<ButtonProps['variant'], 'text'>) =>
  render(
    <StyledIconButton variant={variant}>
      <SpeedIcon />
    </StyledIconButton>,
  );

describe('StyledIconButton Suite', () => {
  it('Should match the snapshot when no variant provided', () => {
    const { asFragment } = renderButton();

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match the snapshot when contained provided', () => {
    const { asFragment } = renderButton('contained');

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match the snapshot when outlined provided', () => {
    const { asFragment } = renderButton('outlined');

    expect(asFragment()).toMatchSnapshot();
  });
});
