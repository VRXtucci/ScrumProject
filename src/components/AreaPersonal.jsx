import React from "react";
import logofunval from "../assets/logofunval.png";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";


function AreaPersonal() {
  return (
    <nav className="w-screen flex justify-between items-center mt-4">
      <div className="flex items-center">
        <Link to="/">
          <img src={logofunval} className="h-[40px]"></img>
        </Link>
        <div className="ml-20 gap-5 flex">
          <Link to="/" >
            Pagina Principal
          </Link>
          <Link to="/area-personal" className="font-bold">Área Personal</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <div>
        <Stack spacing={4} direction="row" sx={{ color: "action.active" }} className="flex items-center mr-12">
          <Badge color="secondary" badgeContent={0} showZero>
            <MailIcon />
          </Badge>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Stack>
      </div>
    </nav>
  )
}

export default AreaPersonal