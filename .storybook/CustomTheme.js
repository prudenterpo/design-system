import { create } from '@storybook/theming';
import colors from '../src/styles/colors';
import brandLogo from '../public/logo-dark.svg';

export default create({
  base: 'light',
  brandTitle: 'Design System AgroForte',
  brandImage: brandLogo,
  colorPrimary: colors.darkBlue,
  colorSecondary: colors.cleanGreen,
});