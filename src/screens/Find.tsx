import { Heading, VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";


export function Find(){
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Bucar por código" showBackButton />

      <VStack mt={8} mx={5} alignItems="center"> 
       
        <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
          Encontre uma aposta através de seu código único
        </Heading>

        <Input mb={2} placeholder="Qual o código da aposta?" />

        <Button title="BUSCAR APOSTA" />

      </VStack>
    </VStack>
  )
}