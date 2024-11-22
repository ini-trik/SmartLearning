import React, { useState } from "react";
import { Modal, Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native-reanimated/lib/typescript/Animated";

export default function InfoScreen({ children }: { children: React.ReactNode }) {
    const [modalVisible, setModalVisible] = useState(false);    

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} // Tutup modal saat pengguna tekan tombol kembali
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Info Kontak</Text>
                        <Text style={styles.modalText}>
                            Username: {'Anonymous'}
                        </Text>
                        <Text style={styles.modalText}>
                            FullName: {'Tidak tersedia'}
                        </Text>
                        <Pressable
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)} // Tutup modal
                        >
                            <Text style={styles.closeButtonText}>Tutup</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    )
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Latar belakang transparan gelap
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        // alignItems: 'center',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        justifyContent: 'center',
        alignSelf: 'center',
      },
      modalText: {
        fontSize: 16,
        marginBottom: 10,
      },
      closeButton: {
        marginTop: 15,
        backgroundColor: '#3470A2',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
      },
      closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
})
