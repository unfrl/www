import React, { FunctionComponent, useState } from "react";
import {
    makeStyles,
    withStyles,
    Theme,
    Grid,
    Typography,
    Avatar,
    Badge,
    Tooltip,
    createStyles,
    useTheme,
    useMediaQuery,
    ClickAwayListener,
    Button,
} from "@material-ui/core";
import MoneyOffRoundedIcon from "@material-ui/icons/MoneyOffRounded";

const useStyles = makeStyles(theme => ({
    stepIcon: {
        width: 30,
        height: 30,
        alignSelf: "center",
        color: "#fff",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
    stepTitle: {
        display: "flex",
    },
    stepTitleText: {
        marginLeft: theme.spacing(2),
    },
    smallIcon: {
        width: 15,
    },
    freeButton: {
        justifyContent: "left",
        paddingLeft: 0,
        minWidth: 30,
    },
}));

const SmallBorderedBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            right: -3,
            border: `2px solid ${theme.palette.background.default}`,
            padding: "0 4px",
            background: "mediumseagreen",
        },
    })
)(Badge);

export interface IProcessStepProps {
    title: string;
    subtitle: string | React.ReactNode;
    isFree?: boolean;
    body: string;
    index: number;
}

const ProcessStep: FunctionComponent<IProcessStepProps> = props => {
    const classes = useStyles();
    const theme = useTheme();
    const fullSize = useMediaQuery(theme.breakpoints.up("sm"));
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const { title, subtitle, isFree, body, index } = props;

    const handleTooltipOpen = () => {
        setTooltipOpen(true);
    };

    const handleTooltipClose = () => {
        setTooltipOpen(false);
    };

    const renderAvatar = () => {
        const avatar = <Avatar className={classes.stepIcon}>{index + 1}</Avatar>;

        if (!isFree) {
            return avatar;
        }

        if (fullSize) {
            return (
                <Tooltip placement="top-end" title="This step is FREE 🤑">
                    <SmallBorderedBadge
                        badgeContent={<MoneyOffRoundedIcon className={classes.smallIcon} />}
                        overlap="circle"
                    >
                        {avatar}
                    </SmallBorderedBadge>
                </Tooltip>
            );
        }

        return (
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={tooltipOpen}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        placement="right-start"
                        title="This step is FREE 🤑"
                    >
                        <Button onClick={handleTooltipOpen} className={classes.freeButton}>
                            <SmallBorderedBadge
                                badgeContent={<MoneyOffRoundedIcon className={classes.smallIcon} />}
                                overlap="circle"
                            >
                                {avatar}
                            </SmallBorderedBadge>
                        </Button>
                    </Tooltip>
                </div>
            </ClickAwayListener>
        );
    };

    return (
        <Grid item xs={12} md={6}>
            <div>
                <Typography variant="h4" className={classes.stepTitle}>
                    {renderAvatar()}
                    <span className={classes.stepTitleText}>{title}</span>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {subtitle}
                </Typography>
            </div>
            <Typography>{body}</Typography>
        </Grid>
    );
};

export default ProcessStep;
