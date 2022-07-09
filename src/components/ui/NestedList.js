import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function NestedList() {
    return (
        <div className="nested-list">
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
            </List>
        </div>
    );
}
