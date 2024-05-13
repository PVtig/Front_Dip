import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    padding: 10,
  },
  parragraph: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 1.5,
    margin: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  }
});

// function PDF() {
//   return (
//     <Document>
//       <Page style={styles.page}>
//         <Text style={styles.title}>Report namber: </Text>
//         <View style={styles.section}>
//           <Text>
//             type 
//           </Text>
//         </View>
//         <View>
//           <Text>
//             Mileage at which the service was performed: 
//           </Text>
//         </View>
//         <View >
//           <Text>
//             car_id - description car
//           </Text>
//         </View>
//         <View >
//           <Text>
//             type 
//           </Text>
//           <Text>
//             Mileage at which the service was performed: 
//           </Text>
//           <Text>
//             car_id - description car
//           </Text>
//           <Text>
//             user_id - description user
//           </Text>
//         </View>
//         <Text style={styles.parragraph}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         </Text>
//         <Text style={styles.parragraph}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         </Text>
//         <Text style={styles.parragraph}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         </Text>

//         <View style={styles.pageNumber}>
//             <Text render={({pageNumber, totalPages}) => `${pageNumber}/${totalPages}`} />
//         </View>
//       </Page>
//     </Document>
//   );
// }

const PDF = () => (
  
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
export default PDF;
