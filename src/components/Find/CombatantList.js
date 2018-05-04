import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Header, Menu, Segment } from 'semantic-ui-react'

import styles from './CombatantList.module.css'
import JOBS, { ROLES } from 'data/JOBS'
import JobIcon from 'components/ui/JobIcon'
import AVAILABLE_CONFIGS from 'parser/AVAILABLE_CONFIGS'

class CombatantList extends Component {
	static propTypes = {
		report: PropTypes.shape({
			code: PropTypes.string.isRequired,
			friendlies: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				type: PropTypes.string.isRequired,
				fights: PropTypes.arrayOf(PropTypes.shape({
					id: PropTypes.number.isRequired
				})).isRequired
			})).isRequired
		}).isRequired,
		currentFight: PropTypes.number.isRequired
	}

	render() {
		const { friendlies } = this.props.report
		const currentFight = this.props.currentFight

		const configs = AVAILABLE_CONFIGS.map(config => config.job.logType)

		// Filter down to just the friendlies in this fight (that aren't limit break), grouping by role
		const grouped = [] // Relying on magic here
		friendlies.forEach(friendly => {
			const inFight = friendly.fights.some(fight => fight.id === currentFight)
			const type = friendly.type
			if (type === 'LimitBreak' || !inFight) {
				return
			}

			// Get the job for the friendly. Gonna push jobs w/o a parser into a special group
			const role = configs.includes(type) ? JOBS[type].role : ROLES.UNSUPPORTED.id

			if (!grouped[role]) {
				grouped[role] = []
			}
			grouped[role].push(friendly)
		})

		return <Fragment>
			<Header>
				Select a combatant
			</Header>

			{grouped.map((friends, index) => {
				const role = ROLES[index]
				return <Fragment key={index}>
					<Segment color={role.colour} attached="top">
						{role.name}
					</Segment>
					<Menu fluid vertical attached="bottom">
						{friends.map(friend =>
							// TODO: This is legit trash
							<Menu.Item
								key={friend.id}
								as={Link}
								to={`/analyse/${this.props.report.code}/${currentFight}/${friend.id}/`}
							>
								<JobIcon job={JOBS[friend.type]} className={styles.jobIcon}/>
								{friend.name}
							</Menu.Item>
						)}
					</Menu>
				</Fragment>
			})}
		</Fragment>
	}
}

export default CombatantList