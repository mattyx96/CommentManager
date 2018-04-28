/**
 * Created by Mattyx on 27/04/18.
 */

import React, { Component } from "react";
import UnmoderatedComments from "../UnmoderateCommentList/CommentList";
import ModeratedComments from "../ModerateCommentList/CommentList";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
const CommentsRouter = DrawerNavigator(
    {
        UnmoderatedComments: { screen: UnmoderatedComments },
        ModeratedComments: { screen: ModeratedComments }
    },
    {
        initialRouteName: "UnmoderatedComments",
        headerMode: "none",
        contentComponent: props => <SideBar {...props} />
    }


);
export default CommentsRouter;