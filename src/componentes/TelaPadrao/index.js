import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform} from 'react-native'
import estilosGlobal from '../../estilosGlobais';

export default function TelaPadrao({children}) {
    return <SafeAreaView style={estilosGlobal.preencher}>
        <StatusBar />
            <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                {children}
            </KeyboardAvoidingView>
  </SafeAreaView>
}