import React from "react";
import Avatar from "react-avatar";
import { useAuth } from "../../Context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

function extractCodeString(message) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}

function isCodeBlock(str) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//") ||
    str.includes("/*") ||
    str.includes("*/")
  ) {
    return true;
  }
  return false
}

const ChatItem = ({ content, role }) => {
  const messageBlocks = extractCodeString(content);
  const auth = useAuth();
  return role == "assistant" ? (
    <div className="flex items-center p-3 bg-assitColor my-2 gap-2">
      <Avatar
        name="A I"
        color="white"
        fgColor="black"
        round
        size="40px"
        className="ml-0"
      />
      <div>
        {!messageBlocks && (<h3 className="text-white text-xl ">{content}</h3>)}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter style={coldarkCold} language="javascript">
                {block}
              </SyntaxHighlighter>
            ) : (
              <h3 className="text-white text-xl ">{block}</h3>
            )
          )}
      </div>
    </div>
  ) : (
    <div className="flex items-center p-3 my-1 rounded-md bg-[#004653] gap-2">
      <Avatar
        name={auth?.user?.name}
        color="black"
        fgColor="white"
        size="40px"
        round
        className="ml-0"
      />
      <div>
        <h3 className="text-white text-xl ">{content}</h3>
      </div>
    </div>
  );
};

export default ChatItem;
