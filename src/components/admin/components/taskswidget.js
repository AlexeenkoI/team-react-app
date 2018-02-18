import React, { Component } from 'react';

export default class TaskWidget extends Component{
    render(){
        return(
            <div className="col-md-8 stats-info stats-last widget-shadow bounceInRight animated">
						<div className="stats-last-agile">
							<table className="table stats-table ">
								<thead>
									<tr>
										<th>Приоритет</th>
										<th>Проект</th>
										<th>Статус</th>
										<th>Прогресс</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">1</th>
										<td>Lorem ipsum</td>
										<td><span className="label label-success">In progress</span></td>
										<td><h5>85% <i className="fa fa-level-up"></i></h5></td>
									</tr>
									<tr>
										<th scope="row">2</th>
										<td>Aliquam</td>
										<td><span className="label label-warning">New</span></td>
										<td><h5>35% <i className="fa fa-level-up"></i></h5></td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td>Lorem ipsum</td>
										<td><span className="label label-danger">Overdue</span></td>
										<td><h5 className="down">40% <i className="fa fa-level-down"></i></h5></td>
									</tr>
									<tr>
										<th scope="row">4</th>
										<td>Aliquam</td>
										<td><span className="label label-info">Out of stock</span></td>
										<td><h5>100% <i className="fa fa-level-up"></i></h5></td>
									</tr>
									<tr>
										<th scope="row">5</th>
										<td>Lorem ipsum</td>
										<td><span className="label label-success">In progress</span></td>
										<td><h5 className="down">10% <i className="fa fa-level-down"></i></h5></td>
									</tr>
									<tr>
										<th scope="row">6</th>
										<td>Aliquam</td>
										<td><span className="label label-warning">New</span></td>
										<td><h5>38% <i className="fa fa-level-up"></i></h5></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
        )
    }
}