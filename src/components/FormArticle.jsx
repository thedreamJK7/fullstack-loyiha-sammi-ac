import React from 'react'
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

const FormArticle = ({props}) => {
    const {title, setTitle, description, setDescription, body, setBody, getSubmitAsync} = props;
    return (
    <form onSubmit={getSubmitAsync}>
      <Input label={"Title"} state={title} setState={setTitle} />
      <TextArea
        label={"Description"}
        state={description}
        setState={setDescription}
      />
      <TextArea
        label={"Body"}
        state={body}
        setState={setBody}
        height={"300px"}
      />
      <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">
        Create
      </button>
    </form>
  );
}

export default FormArticle