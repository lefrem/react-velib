import React from "react";
import { ListView, Text } from "react-native";
import axios from "axios";

export const API_URL =  "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state";
  
//Exercice 3 etant basé sur votre correction j'ai voulu essayer une autre méthode avec axios

export default class List extends React.Component {

    constructor (props) {
        super(props)
        this.fetchVelib()
    }

    fetchVelib () {
        axios.get(API_URL)
        .then((response) => {
            this.setState({report: response.data})
        })
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        return (
            // <ListView 
            //     dataSource={ds.cloneWithRows(this.state.report.records)}
            //     renderRow={(rowData) => <Text>{rowData.fields.station_name}</Text>}
            // />
            <Text>Fonctionne pas</Text>
        )
     }
}