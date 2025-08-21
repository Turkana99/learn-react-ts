import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Course from "./Course";
import Angular from "../../assets/images/angular.jpg";
import Bootstrap from "../../assets/images/bootstrap5.png";
import GeneralWeb from "../../assets/images/kompleweb.jpg";
import Csharp from "../../assets/images/ccsharp.png";


function CourseApp() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Course Project</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Facilis itaque nobis
            exercitationem cupiditate inventore illo eum ipsa obcaecati placeat
            iste perspiciatis, neque iusto soluta odio aliquid a? Voluptatem,
            totam dolor!"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Facilis itaque nobis
            exercitationem cupiditate inventore illo eum ipsa obcaecati placeat
            iste perspiciatis, neque iusto soluta odio aliquid a? Voluptatem,
            totam dolor!"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Course
              image={GeneralWeb}
              title="GeneralWeb"
              description="Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Facilis itaque nobis
            exercitationem cupiditate inventore illo eum ipsa obcaecati placeat
            iste perspiciatis, neque iusto soluta odio aliquid a? Voluptatem,
            totam dolor!"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Course
              image={Csharp}
              title="Csharp"
              description="Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Facilis itaque nobis
            exercitationem cupiditate inventore illo eum ipsa obcaecati placeat
            iste perspiciatis, neque iusto soluta odio aliquid a? Voluptatem,
            totam dolor!"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CourseApp;
