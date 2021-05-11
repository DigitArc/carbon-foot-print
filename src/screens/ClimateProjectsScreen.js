import React from 'react'
import { View, FlatList } from 'react-native'
import Balloon from 'react-native-balloon'
import styled from 'styled-components/native'
import ProjectCard from '../components/climate-projects/project-card/ProjectCard'
import { StyledText } from '../components/common'

const climateProjects = [
  {
    id: 1,
    title: 'Mor bagis yapiniz',
    content: 'lorem ipsum dolor sit amet sfafs sds',
    projectName: 'Proje bilmem c',
    tonPrice: 23,
    imgSrc: 'https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg'
  },
  {
    id: 2,
    title: 'lorem ipsum felan',
    content: 'lorem ipsum dolor sit amet sfafs sds',
    projectName: 'Abc Proje',
    tonPrice: 10,
    imgSrc: 'https://fisoloji.com/wp-content/uploads/2020/04/Magical-forest-nature-wallpaper.jpg'
  },
  {
    id: 3,
    title: 'lorem ipsum felan',
    content: 'lorem ipsum dolor sit amet sfafs sds',
    projectName: 'Selamlar projesi',
    tonPrice: 65,
    imgSrc: 'https://fisoloji.com/wp-content/uploads/2020/06/abstract-nature-girl-aetshetic-sunset-576x1024.jpg'
  },
  {
    id: 4,
    title: 'lorem ipsum felan',
    content: 'lorem ipsum dolor sit amet sfafs sds',
    projectName: 'Project kundemlo',
    tonPrice: 48,
    imgSrc: 'https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyZWVuJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  }
]

const ClimateProjectsScreen = () => {
  return (
    <View style={{padding: 16}}>
      <Balloon 
        triangleDirection='left'
      >
        <StyledText>Karbon ayakizinizi telafi etmek icin projeleri destekleyin</StyledText>
      </Balloon>

      <FlatList
        style={{height: '80%'}}
        horizontal
        data={climateProjects}
        renderItem={ProjectCard}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}


export default ClimateProjectsScreen
