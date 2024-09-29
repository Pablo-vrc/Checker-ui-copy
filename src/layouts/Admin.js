/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { ChakraProvider, Portal, useDisclosure, Text } from "@chakra-ui/react";

import React, { useState } from "react";

import theme from "theme/themeAdmin.js";

import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import Dash from "../views/Dashboard/Dashboard";

export default function Dashboard() {
  

  // ref for main panel div
  const mainPanel = React.createRef();
  // functions for changing the states from components
  
  
  
  // Chakra Color Mode
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      
      <MainPanel
        ref={mainPanel}
        w="100%"
        h="100vh"
        minH="100vh">
        <PanelContent>
          <PanelContainer>
            <Dash />
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}
