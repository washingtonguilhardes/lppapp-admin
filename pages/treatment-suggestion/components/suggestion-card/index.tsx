import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 350
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props: { item: string }) {
  const { item } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href={`/treatment-suggestion/${item.toLowerCase()}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://picsum.photos/400/600?i=${item}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Tratamento X
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ maxHeight: '92px', overflowY: 'hidden' }}>
              Um tratamento de boas cadastrados
              Quis reprehenderit magna ullamco proident sunt et eu aliqua labore aliqua duis occaecat consequat. Amet non quis labore sunt commodo elit. Id pariatur aute quis esse. Tempor sit aute consectetur velit deserunt qui ut aliquip magna culpa magna quis Lorem do. Laborum ex adipisicing duis commodo cillum aute ut exercitation eiusmod irure pariatur. Nisi do sunt exercitation aliquip magna ullamco laborum deserunt. Consectetur proident tempor proident nostrud.

              Ipsum magna aliqua magna aute est nisi excepteur anim veniam labore dolor ipsum id. Exercitation eiusmod irure pariatur aliqua veniam minim amet mollit. Est do cupidatat elit dolore labore voluptate est pariatur. Laborum pariatur sunt sunt labore enim velit.

              Proident est esse sint magna eu consequat minim dolore anim magna cupidatat nostrud id. Velit anim aliqua ut sint qui incididunt irure anim et nisi est non. Aliqua sint culpa do dolore reprehenderit occaecat adipisicing officia culpa dolore sit sit enim irure. Voluptate minim duis cupidatat culpa labore nulla qui Lorem nostrud magna nisi proident in ullamco. Consequat duis aute anim esse amet quis in velit. Adipisicing anim nostrud aliqua qui nulla. Cillum non nostrud exercitation qui nostrud fugiat est sint Lorem elit ullamco nostrud duis aute.

              Ea minim cupidatat consectetur sit ea laborum officia nostrud consequat Lorem tempor elit. Aliquip excepteur voluptate sunt pariatur laborum aliquip. Laborum deserunt elit est velit reprehenderit laboris commodo sint in adipisicing ipsum cupidatat. Nulla veniam nisi ut consequat voluptate voluptate velit ea sint incididunt culpa consectetur eiusmod. Adipisicing sit elit commodo dolore eiusmod. Pariatur magna officia est do.

              Enim excepteur velit aute amet exercitation esse labore Lorem. Lorem incididunt ex exercitation consequat tempor cupidatat exercitation do laboris ipsum et adipisicing exercitation incididunt. Ad Lorem commodo dolore consectetur excepteur do deserunt ullamco. Do adipisicing duis magna laborum do anim ut. Anim ipsum enim laborum mollit sunt commodo amet aliqua consectetur est nulla.

              Consectetur culpa do aliquip veniam velit non anim eu non reprehenderit officia sunt consequat aliqua. Dolor anim tempor nulla ullamco cillum cupidatat ipsum. Ad labore duis proident quis sint minim voluptate. Voluptate pariatur sint nostrud culpa officia ut ullamco fugiat eu do ea.

              Sit anim est excepteur quis deserunt. Incididunt veniam ut Lorem sit commodo occaecat dolor sunt laborum laborum laboris. Ad pariatur excepteur enim incididunt. Occaecat laborum laboris duis irure nostrud cillum do commodo eiusmod dolor eu sunt. Pariatur ullamco quis tempor eu labore esse culpa anim ut officia. Officia eiusmod velit officia ad. Pariatur voluptate tempor irure fugiat velit excepteur eiusmod aute.
          </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}