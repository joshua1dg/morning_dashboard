
const DEMOUSERSIGNIN = { username: "DEMO", password: "DEMOPASSWORD" };
const DEMOUSERACCOUNTS = { AppleCalendarInfo: "https://p26-calendars.icloud.com/published/2/MTAwM…N1q9MsP4gFi6_OgI2IO_yiSpx9I_X4dzGHmPkUVfZqUYcayEs", RedditInfo: "https://www.reddit.com/r/Entrepreneur/", YoutubeInfo: "PewDiePie" };


demoLogic = async (values) => {
    console.log('Form Values', values);

    const authResp = await this.props.sendUserAuth(values);
    console.log('this is response!: ', authResp);

    if (!authResp.success) {
        console.log('server did not give response for auth!');
        return;
    } else{
        const credResp = await this.props.sendUserCredentials(values);
        if (!credResp.success) {
            console.log('server did not give response for credentials!');
            return;
        }
        console.log('credResp after await: ', credResp);
    }

}

