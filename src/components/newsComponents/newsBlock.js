import React from 'react';
import { Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
   
    minWidth: 345,
   
    minHeight: 370
  },
  media: {
    height: 140,
  },
});

export default function NewsBlock(props) {
  const classes = useStyles();

  return (
    <div className= {props.class == 0 ? 'single_newsCard_one': 'single_newsCard' }>
    <Card className={classes.root}>
      <CardActionArea>
      <Link className='smthNew' to="/News" >
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        /></Link>
        
        <CardContent className = 'descr'>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <h6>{props.author}</h6>
          </Typography>
        </CardContent>
       
      </CardActionArea>
    </Card>
    </div>
  );
}




// function NewsBlock (props) {


//     return (
//       <div className="newsBlock" >  <Link className='smthNew' to="/News" >

//         <h4 className='newsBlockTitle' >{props.title}
//         {/* <button className='btn-news' onClick={()=>props.content}>more</button>  */}
//         </h4>
//         <div>
//         <img className='newsBlockImage' src={props.image} alt={props.author}/>
    
//         {/* <p className='newsBlockDescription'>{props.description}</p>  */}
//         </div>
//          <h6>{props.author}</h6>
//          </Link>
//         </div>
        
      
//     )
//   }

// export default NewsBlock;




