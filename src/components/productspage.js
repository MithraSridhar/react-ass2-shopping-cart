import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Stars from './rating';
import ReactDOM from 'react-dom/client';



const productList=[
    {
        id: 1,
        title: "Samsung Galaxy Watch5 Bluetooth(44 mm,Sapphire)",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg"
    },
    {
        id: 2,
        title: "iPhone 15 (128 GB) (256GB Storage)",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg"
    },
    {
        id: 3,
        title: "Samsung Galaxy S23 5G (256GB Storage)",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 3.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg"
    },
    {
        id: 4,
        title: "Samsung Galaxy S23 Ultra 5G (256GB Storage)",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg"
    },
    {
        id: 5,
        title: "Apple Watch Series 9 [GPS + Cellular 41mm]",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 1.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg"
    },
    {
        id: 6,
        title: "Apple AirPods Pro (2nd Generation)",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 3.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg"
    },
    {
        id: 7,
        title: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg"
    },
    {
        id: 8,
        title: "Samsung Galaxy Watch5 Bluetooth(44 mm,Sapphire)",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 1.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg"
    }
      ];




export function ProductsPage(){

    return(
    <div>
      {/* <NavBar cartSize={cartSize}/>
      <Header/> */}
      <Products/>
      <Footer/>  
      </div>
    );
}

let cartSize =0;
const onProductCount =(count)=>{
   cartSize = count;
  console.log("product size is ",cartSize);
  return(
  <NavBar cartSize={cartSize}/>
  );
}

function NavBar({cartSize}) { 

console.log("Cart size",cartSize)

    const navigate = useNavigate() 
      
    return (
      <Navbar id ="navbar" expand="lg" className="bg-body-tertiary">
        <Container className="container1">
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/productspage">
                  Popular Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  New Arrivals
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
     
        <Container className="container2">
        <form className="d-flex">
          
                          <button  onClick={() => navigate("/cart")} className="btn btn-outline-dark" type="submit"  >
                          <i className="fa-solid fa-cart-shopping fa-xs" ></i>
                          &nbsp;
                              Cart
                              &nbsp;   
                              <span className="badge bg-dark text-white ms-1 rounded-pill">{cartSize}</span>
                        </button>
             
        </form>
        </Container>  
      </Navbar>
    );
  }

  function Header(){
    return(
        <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Shop in style</h1>
                <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
    </header>
    );
    }

    function Products(){

        const [selectedProducts, setSelectedProducts] = useState([]);
        
        
        const onProductSelect=(value)=>{
        console.log("value is ",value)
        
        setSelectedProducts((prevState)=>{ 
            if(prevState.includes(value)){
                return prevState.filter(item=> item!==value)
            }
            else{
                return [...prevState,value]
            }
        })
       
        
        }
        onProductCount(selectedProducts.length); 
        console.log("selected produts list is ",selectedProducts)
        
        
            return(
              <div>
              <NavBar cartSize={cartSize}/>
              <Header/>
                <section className="py-5">
            <Container>
              <Row>
                {productList.map((eachProduct)=>(
                    <GetProductCards key={eachProduct.id} productID={eachProduct.id} onProductSelect={onProductSelect} imagelink ={eachProduct.images} productname ={eachProduct.title} productprice={eachProduct.price} productrating={eachProduct.rating} />
                ))}
              </Row>
            </Container>
                </section>
                </div>
            );
        //     productList=  getProducts();
        //    console.log(productList)
        //    productList.then((response)=>{
        //     console.log(response.products[0].id)
        //    })
        //    .catch((err)=>
        //     console.log("error")
        //    )
        }
        
        // async function getProducts(){
        //     let res = await fetch("https://dummyjson.com/products")
        //      data = await res.json();
        //     console.log(data.products[0].id)
        //     return data;
        // }
        
        function GetProductCards({imagelink,productname,productprice,productrating,productID,onProductSelect}){
       // console.log("key is ",productID)
             const [cartButton, setCartButton] = useState(true);
       
            const buttonHandler=(productID)=>{
                    setCartButton(!cartButton)   
                    onProductSelect(productID)  
                        
            }
            return (
                <Col>
                <Card style={{ width: '18rem' }}>
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right: "0.5rem"}}>Sale</div>
                <Card.Img variant="top" src={imagelink}/>
                <Card.Body>
                  <Card.Title>{productname}</Card.Title>
                  <Stars rating ={productrating}/>
                  <Card.Text>
                    {productprice}
                  </Card.Text>
                  <Button onClick={()=>buttonHandler(productID)} id="button" style={{width:cartButton===false?"200px":"117px"}} variant="primary">{cartButton===true?"Add to cart":"Remove from cart"}
                  </Button>
                </Card.Body>
              </Card>
              </Col>
            );
        }
        


        function Footer(){

            return(
               
                <footer class="py-5 bg-dark">
                    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
                </footer>
            ) ;
        }
        
        export default Footer;       