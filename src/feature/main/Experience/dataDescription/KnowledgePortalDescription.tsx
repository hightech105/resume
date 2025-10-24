import { FC } from "react";

const KnowledgePortalDescription: FC = () => {
  return (
    <div>
      <p>This project is for a customer of SibaService.</p>
      <i>
        Click{" "}
        <a href="https://www.siba-service.jp/service/knowledge-portal/">here</a>{" "}
        for more details about SibaService and this project.
      </i>
      <br />
      <br />
      <p>My team receives issues from GitHub and codes to resolve them.</p>
      <br />
      <p>
        The issues include:{" "}
        <i>
          fixing bugs, adding new features, optimizing performance, updating
          library versions and etc.
        </i>
      </p>
    </div>
  );
};

export default KnowledgePortalDescription;
