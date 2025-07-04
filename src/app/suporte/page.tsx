import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Form, FormLabel } from "@/components/ui/form"

export default function Suporte(){
    return(
        <Form>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Insira seu email"></Input>
            <Textarea></Textarea>

        </Form>
        
    )
}