import React from 'react'
import { Header, ProductFeed} from './pages/AllProduct'
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail/ProductDetail'


const App = () => {
    return(
        <div className='app'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' exact element={ <ProductFeed />} />
                    <Route path='/product/:productID' exact element={<ProductDetail />} />
                    <Route>
                        404 Not Found!
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App