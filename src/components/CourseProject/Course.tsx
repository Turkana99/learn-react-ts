import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
type CourseProps = {
  image: string;
  title: string;
  description: string;
};
function Course({ image, title, description }: CourseProps) {
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={image} title="Projects" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );

  //   <div>
  //     <img src={image} alt="" />
  //     <p>{title}</p>
  //     <p>{description}</p>
  //   </div>;
}

export default Course;
