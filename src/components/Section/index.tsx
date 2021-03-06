import React from 'react';

import Paper, { PaperProps } from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';




interface SectionProps {
  className?: string;
  spacing?: number | string;
  gutter?: number | string;
  transparent?: boolean
}
const useStyles = makeStyles(() => ({
  root: ({ spacing, gutter, transparent }: SectionProps) => ({
    ...(spacing && { padding: spacing }),
    ...(gutter && { margin: gutter }),
    ...(transparent && { backgroundColor: 'transparent' }),

  })
}));

const Section: React.FC<SectionProps & PaperProps> = (props) => {
  const {
    className,
    spacing,
    gutter,
    transparent,
    ...others
  } = props;
  const classes = useStyles({ spacing, gutter, transparent, });
  return (
    <Paper elevation={0} {...others} className={clsx(className, classes.root)} />
  )
}

export default Section;