import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Modal, Text, TouchableOpacity, StyleSheet } from "react-native";
import { supabase } from "~/lib/supabase";


export default function HeaderRight({ children }: { children: React.ReactNode }) {
    const [menuVisible, setMenuVisible] = useState(false); // State untuk menu dropdown

    const toggleMenu = () => {
        setMenuVisible(!menuVisible); // Toggle visibilitas menu
    };
    return (
        <>
            <TouchableOpacity onPress={toggleMenu} style={{ marginRight: 16 }}>
                <Ionicons name="ellipsis-horizontal" size={22} color="gray" />
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={menuVisible}
                animationType="fade"
                onRequestClose={toggleMenu}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={toggleMenu}
                >
                    <View style={styles.menuContainer}>

                        {children}
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    )
}
const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
    },
    menuContainer: {
        position: 'absolute',
        top: 55,
        right: 2,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 10,
        width: 120,
        elevation: 5,
    },
    menuItem: {
        padding: 8,
        alignItems: 'center',
    },
    menuText: {
        fontSize: 16,
        color: '#333',
    },
});