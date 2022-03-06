import Header from './components/Header'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer
        title='KittyPics'
        message='Venta de memes de gatitos'
      ></ItemListContainer>
      <Footer />
    </>
  )
}

export default App
