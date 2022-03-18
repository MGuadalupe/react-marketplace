import Header from './components/Header'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  const productos = [
    {
      id: 1,
      title: 'Gatito gordo',
      url: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/09/23/614c6b7c5f203.jpeg',
      price: 10,
    },
    {
      id: 2,
      title: 'Gatito enojado',
      url: 'https://www.marketingdirecto.com/wp-content/uploads/2014/11/meme-gato-300x300.jpg',
      price: 20,
    },
    {
      id: 3,
      title: 'Gatito lava platos',
      url: 'https://de10.com.mx/sites/default/files/2019/08/06/dia_del_gato_mejores_memes_humor_1_0.jpg',
      price: 30,
    },
  ]
  return (
    <>
      <Header />
      <ItemListContainer
        title='KittyPics'
        message='Venta de memes de gatitos'
        productosIniciales={productos}
      ></ItemListContainer>
      <Footer />
    </>
  )
}

export default App
