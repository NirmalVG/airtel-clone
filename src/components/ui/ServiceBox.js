import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Image } from "react-bootstrap";
import Typography from "@mui/material/Typography";

export default function ServiceBox({ service }) {
    return (
        <div className="service-box-section">
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                        m: 1,
                        width: 156,
                        height: 126,
                    },
                }}
            >
                <Paper elevation={3} className="main-box box-expand">
                    <Image
                        className="box-img"
                        src={service.image}
                        alt={service.name}
                    />
                    <Typography className="service-box-head">
                        {service.name}
                    </Typography>
                </Paper>
            </Box>
        </div>
    );
}
