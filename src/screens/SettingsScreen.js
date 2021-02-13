import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import {Privacy, TermsOfUse} from '../utils/text';
import Users from '../stores/Users';

const contents = [
  {
    title: '약관',
    content: TermsOfUse,
  },
  {
    title: '개인정보처리방침',
    content: Privacy,
  },
];

export default class SettingsScreen extends Component {
  constructor() {
    super();
  }

  state = {
    activeSections: [],
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({collapsed: !this.state.collapsed});
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <View style={[styles.header, isActive ? styles.active : styles.inactive]}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <View
        style={[styles.content, isActive ? styles.active : styles.inactive]}>
        <Text style={styles.content}>{section.content}</Text>
      </View>
    );
  }

  render() {
    const {activeSections} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{paddingTop: 5}}>
          <Accordion
            activeSections={activeSections}
            sections={contents}
            touchableComponent={TouchableOpacity}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
          <TouchableOpacity
            onPress={() => {
              Users.clearUser();
              this.props.navigation.reset({index: 0, routes: [{name: 'Login'}]});
            }}
            style={[styles.header]}>
            <Text style={styles.headerText}>로그아웃</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
  },
  headerText: {
    color: 'white',
    marginLeft: 15,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '500',
  },
  content: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    paddingTop: 5,
    fontSize: 18,
    color: 'white',
  },
  active: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  inactive: {
    backgroundColor: 'transparent',
  },
});
