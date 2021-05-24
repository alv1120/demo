import React, { Fragment } from 'react'

import Head from "next/head"


function Layout({tittle}) {

    return (
        <Fragment>
            <Head>
                <title>{tittle}</title>
                <link rel="shortcut icon" type="image/x-icon" href="/favixon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />





      
                <link
      rel="stylesheet"
      href="vendor/bootstrap-4.2.1/css/bootstrap.min.css"
    />   
<script src="js/vendor/jquery-3.3.1/jquery.min.js"></script>
<script src="js/vendor/bootstrap-4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="js/vendor/owl-carousel-2.3.4/owl.carousel.min.js"></script>


<script src="js/vendor/nouislider-12.1.0/nouislider.min.js"></script>
<script src="js/js/number.js"></script>
<script src="js/js/main.js"></script>
<script src="js/vendor/svg4everybody-2.1.9/svg4everybody.min.js"></script>


           

            </Head>



        </Fragment>
    )
}

export default Layout
