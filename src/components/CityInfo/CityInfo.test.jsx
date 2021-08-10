import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo render", async () =>{
    //AAA
    //Arrange
    //Act
    const { findAllByRole } = render (<CityInfo city="Buenos Aires" country="Argentina"/>)
    //Assert
    const cityComponent = await  findAllByRole("heading")

    expect(cityComponent[0]).toHaveTextContent("Buenos Aires")
    expect(cityComponent[1]).toHaveTextContent("Argentina")
} )