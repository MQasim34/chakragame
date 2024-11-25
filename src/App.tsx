import { Grid, GridItem, Stack } from "@chakra-ui/react"
import Nav from "./components/Sitewrapper/navigation/Nav"

const App = () => {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav">
        <Nav />
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem area="aside">aside</GridItem>
      </Stack>
      <GridItem area="main">main</GridItem>
    </Grid>
  )
}

export default App